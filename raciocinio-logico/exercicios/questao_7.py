# Orientado a objetos


# Classe partida representando uma Partida
class Partida():
    # Inicialização das variaveis necessarias para a partida existir
    def __init__(self, nome_time_1: str, gols_time_1: int,nome_time_2: str, gols_time_2: int):
        self.nome_time_1 = nome_time_1
        self.nome_time_2 = nome_time_2       
        self.gols_time_1 = gols_time_1
        self.gols_time_2 = gols_time_2
        self.time_1_total_penaltis = 0
        self.time_2_total_penaltis = 0
        # Caso o saldo de gols seja igual, inicia a função que gera a cobrança de penaltis
        if(gols_time_1 == gols_time_2):
            self.cobrancaPenaltis()
                    
    def cobrancaPenaltis(self):
        # Inicializa o contador para o loop
        i = 1;
        while i <= 5:
            # Solicita do usuario todas as variaveis necessarias para ocorrer a cobrança de penaltis
            print(f"Cobrança de pênaltis da partida {self.nome_time_1} X {self.nome_time_2}")
            print("Rodada: {0}".format(i))
            self.time_1_total_penaltis += int(input(f"{self.nome_time_1} marcou penalti sobre o {self.nome_time_2}? 1 - sim, 0 - não"))
            self.time_2_total_penaltis += int(input(f"{self.nome_time_2} marcou penalti sobre o {self.nome_time_1}? 1 - sim, 0 - não"))
            print(f"Total de gols {self.nome_time_1} = {self.time_1_total_penaltis}")
            print(f"Total de gols {self.nome_time_2} = {self.time_2_total_penaltis}")
            # Caso esteja na ultima repetição verifica se é necessario começar mais uma serie de penaltis colocando o contador no valor inicial
            if i == 5:
                if self.time_1_total_penaltis == self.time_2_total_penaltis:
                    print("Empate, mais uma rodada de penaltis")
                    i = 1
            # Caso contrario incrementa mais 1 a variavel de controle
            else:
              i += 1

        
    def vencedor(self):
        # Verifica qual time tem o maior saldo de gols
        if self.gols_time_1 > self.gols_time_2:
            return "Time 1 é o vencedor é o vencedor da chave A"
        elif self.gols_time_2 > self.gols_time_1:
            return "Time 2 é o vencedor é o vencedor da chave A"
        # Caso tenha sido empate, recupera o saldo de gols na cobrança de penaltis e define um vencedor
        else:
            if self.time_1_total_penaltis > self.time_2_total_penaltis:
                return "Time 1 é o vencedor é o vencedor da chave A"
            elif self.time_2_total_penaltis > self.time_1_total_penaltis:
                return "Time 2 é o vencedor é o vencedor da chave A"
            
# Inicializa o programa solicitando do usuario as informações necessarias para acontecer a partida
#
# Nome dos times participantes
nome_time_1 = input("Digite o nome do time 1")
nome_time_2 = input("Digite o nome do time 2")
nome_time_3 = input("Digite o nome do time 3")
nome_time_4 = input("Digite o nome do time 4")
print("----"*5+"Partida 1"+"----"*5)
# Saldo de gols da primeira partida
gols_time_1 = int(input(f"Digite o numero de gols que o {nome_time_1} fez sobre o {nome_time_2}: "))
gols_time_2 = int(input(f"Digite o numero de gols que o {nome_time_2} fez sobre o {nome_time_1}: "))
print("----"*5+"Partida 2"+"----"*5)
#Saldo de gols da segunda partida
gols_time_3 = int(input(f"Digite o numero de gols que o {nome_time_3} fez sobre o {nome_time_4}: "))
gols_time_4 = int(input(f"Digite o numero de gols que o {nome_time_4} fez sobre o {nome_time_3}: "))
print("----"*10)

# Instancia a classe Partida passando os atributos necessarios.
partida_1 = Partida(nome_time_1=nome_time_1,gols_time_1=gols_time_1,nome_time_2=nome_time_2,gols_time_2=gols_time_2)
partida_2 = Partida(nome_time_1=nome_time_3,gols_time_1=gols_time_3,nome_time_2=nome_time_4,gols_time_2=gols_time_4)
# Recupera o resultado armazenando numa variavel 
resultado_partida_1 = partida_1.vencedor()
resultado_partida_2 = partida_2.vencedor()
# Mostra ao usuario o resultado
print(f"O resultado da partida 1 é: {resultado_partida_1}")
print(f"O resultado da partida 2 é: {resultado_partida_2}")





