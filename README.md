# IZIMAILSEND.getLinkDocById(7500)
7500 é o id do documento no GED
# IZIMAILSEND.setReceiver("alisson@myemailemail.com.br")
A diciona um ou vários destinatários (pode ser executada várias vezes)
# IZIMAILSEND.setFrom("nao-responder@minasul.com.br")
Adiciona no cabeçalho o remetente
# IZIMAILSEND.setSubject("Testando e-mail com anexo via API")
Define o assunto do email
# IZIMAILSEND.setTemplateId("envio_com_anexo_padrao")
O template que você deseja usar
# IZIMAILSEND.setParam("nome", "Alisson")  IZIMAILSEND.setParam("sobrenome", "Padua")
Adiciona os parametros para serem substituidos no template
# IZIMAILSEND.send(true)
Chama a API e envia o email, setando TRUE quando tem anexo e false quando não tem
