import pandas as pd
import psycopg2
from flask import Flask
from flask import request
from flask_cors import CORS,cross_origin
import sqlalchemy as sql

def conecta_db():
  con = psycopg2.connect(host='ec2-3-230-122-20.compute-1.amazonaws.com', 
                         database='dfugd6fj1kkurt',
                         user='lrvffmnhmvtobh', 
                         password='f1b93c5d1462964190d72e6c6fe9090593ee3ed3a5bde52bf9c4f5e9d12d2009')
  return con

def realiza_consulta(sql_query):
  consulta = 0
  conn  = conecta_db()
  cursor = conn.cursor()
  cursor.execute(sql_query)
  if 'insert' not in sql_query:
    consulta = cursor.fetchall()
  conn.commit()
  cursor.close()
  conn.close()
  return consulta

def calcula_id(tabela):
  id = realiza_consulta(f"select count(*) from {tabela}")
  return id[0][0] + 1

def cadastro_usuario_endereco_bd(dad_usr):
  id = calcula_id("cadastro")
  query_cadastro =  f"""insert into cadastro values(
          '{dad_usr["nome"]}','{dad_usr["cpf"]}','{dad_usr["email"]}',
          '{dad_usr["telefone"]}', '{dad_usr["senha"]}',{id},{id})"""
  
  query_endereco = f""" insert into endereco 
  values('{dad_usr["cep"]}','{dad_usr["nome_rua"]}','{dad_usr["bairro"]}',
  {dad_usr["numero"]},'{dad_usr["complemento"]}','{dad_usr["cidade"]}','{dad_usr["estado"]}',{id})
  """
  realiza_consulta(query_endereco)
  realiza_consulta(query_cadastro)
  
  return id

def cadastro_pedido(dad_usr):
  id_order = calcula_id("pedido")
  
  if(len(dad_usr)==3):
    id_item = dad_usr["id_item"]
  else:
    id_item = calcula_id("cardapio")
    query_cardapio = f"""
                insert into cardapio values('{dad_usr["pizza"]}',      
                '{dad_usr["tamanho"]}',{dad_usr["preco"]},{id_item}, 
                '{dad_usr["categoria"]}')
                """
    realiza_consulta(query_cardapio)

  query_order = f"""
              insert into pedido values({id_item},    
              {dad_usr["quantidade"]},{id_order}, {dad_usr["id_usuario"]})
              """
  realiza_consulta(query_order)
    

  return id_order


  
# ----------------------------------------------------------------------------------  
  
app = Flask(__name__)
CORS(app,resource={r"/*":{"origins":"*"}})

@app.route('/')
def homepage():
  return "Olá essa é a homepage da Api do trabalho de Engenharia de Software "
      

@app.route('/cardapio',methods=['GET'])
def gera_cardapio():
  conn  = conecta_db()
  df_pedido = pd.read_sql("select * from cardapio",conn)
  return df_pedido.to_json(orient="records")

@app.route('/register_user',methods=["POST"])
def cadastrar_usuario():
  dados_usr = request.get_json()
  # print(dados_usr)
  id_usr = cadastro_usuario_endereco_bd(dados_usr)
  
  return {"cadastrado": True,
          "id" : id_usr}

@app.route('/register_order',methods=["POST"])
def cadastrar_pedido():
  dados_usr = request.get_json()
  
  id_ped = cadastro_pedido(dados_usr)
  print(dados_usr)
  return {"cadastrado": True,
        "id" : id_ped}
  
    


@app.route('/login', methods=["POST"])
def verifica_senha():
  dad_passw = request.get_json()
  query = f"""SELECT id,email,senha
              FROM cadastro
              WHERE email ='{dad_passw["email"]}' AND       
                    senha ='{dad_passw["senha"]}'
  """
  result = realiza_consulta(query)
  if len(result)>0:
    query = rf"""SELECT c.nome,
                        e.cep,
                        e.complemento,
                        e.numero,
                        e.bairro,
                        e.cidade,
                        e.estado,
                        e.nome_da_rua,
                        c.id
                FROM Endereco e INNER JOIN cadastro c ON c.id_endereco = e.id 
                WHERE e.id  = {result[0][0]}
    """
    retorno = realiza_consulta(query)
    # print(retorno)
    return {"nome":retorno[0][0],
            "isLogged":True,
            "endereco":{
                      "cep":retorno[0][1],
                      "complemento":retorno[0][2],
                      "numero":retorno[0][3],
                      "bairro" : retorno[0][4],
                      "cidade": retorno [0][5],
                      "estado": retorno[0][6],
                      "rua": retorno[0][7]
                      },
           "id": retorno[0][8]
          }
  else : 
    return {"isLogged":False}

    
app.run(host='0.0.0.0')