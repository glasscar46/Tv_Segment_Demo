def findAs(data, ascalc):
    """
    - data: Lista de triplas contendo os valores ('As', 'diametro', 'qtd').
    - ascalc: Valor de As para comparar.
    """
    # Filtrar dados onde As é maior que ascalc
    filtered = [d for d in data if d[0] > ascalc]

    # Ordenar a lista filtrada por As e, em seguida, por diâmetro
    filtered.sort(key=lambda x: (x[0], x[1]))

    # Verificar se a lista filtrada não está vazia e retornar o primeiro elemento
    if filtrados:
        return filtrados[0]
    else:
        return "Não há valor de As maior que o especificado."

# Exemplo de uso do algoritmo
if __name__ == "__main__":
    # Exemplo de dados
    dados = [
        (100, 12, 4),
        (150, 10, 6),
        (200, 8, 8),
        (150, 8, 5),
        (250, 12, 3)
    ]

    # Valor de As para comparação
    ascalc = 145

    # Chamar a função e imprimir o resultado
    resultado = encontrar_as_proximo_maior(dados, ascalc)
    print(resultado)
