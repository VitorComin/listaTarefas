# listaTarefas
Uma aplicação Web que permite adicionar e remover tarefas da lista de tarefas, que estão guardadas em uma Fake API. 

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/a2221e04-cd78-42a6-9a60-9e0e39f0e772)

## Interface

Construi um modelo onde temos um Header preto, que cobre 100% da largura da tela, com uma div que contém o titulo em branco.

A fonte foi importada do Google Fonts.

A imagem de fundo foi adquirida no Pexels, site de imagens gratuitas.

O Footer contém meu nome e botões que ao clicar levam para meu GitHub e meu LinkedIn. Os icones foram importados gratuitamente do Font Awesome.

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/a8c1745d-027d-4d47-948e-3de79b17857f)

## Aplicação

A aplicação consiste em uma lista de tarefas que você pode consultar e editar, onde é possível adicionar e remover tarefas, além de definir prioridade a elas.

Entre o header e o footer há um main, onde há uma div que contém um select que, ao iniciar a página, chama a função getTarefas(), que pega todas as tarefas que estão armazenadas no arquivo db.json (faz um GET) e cria uma option para cada tarefa, com o valor sendo a ID que está cadastrada e o conteúdo da option sendo o título da tarefa que está cadastrada.

Logo abaixo há o botão concluir tarefa, que, ao clicar, chama a função concluir(), que pega o ID da option selecionada e busca ela no arquivo db.json, fazendo um DELETE. 

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/bac126e3-97fa-4b2c-b0ee-66dfc60cd13d)

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/89821e01-8acc-4640-8f6f-d618a169b42d)


Caso nenhuma option esteja selecionada, ele apresenta um erro: 'Por favor, selecione uma tarefa para concluir.'.

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/22da9f1a-c2f8-448f-8a75-172f20fe912b)

Abaixo há campos de "Insira o título da tarefa" e "Defina a prioridade da tarefa", onde, ao clicar no botão que há abaixo "Adicionar Tarefa", chama a função adicionar() que faz um POST utilizando o valor fornecido pelo primeiro campo como titulo, o valor no segundo campo como prioridade e definindo um ID. 

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/ae23e0aa-29e6-451c-b85c-d5b0fed1150b)

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/76950a8b-c990-4a58-afd5-709d589d9d66)

O select de prioridade sempre vai considerar a prioridade "baixa" inicialmente. Caso não seja informado um título dará um erro: 'Por favor, insira um título para adicionar uma tarefa.'.

![image](https://github.com/VitorComin/listaTarefas/assets/106283734/4dd94f45-cf4f-47f7-8e46-191ad803aa36)
