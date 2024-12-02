```markdown
# 💻 SmartContractHardhat

Este repositório contém o desenvolvimento, teste e implantação de um contrato inteligente simples utilizando Hardhat.

## 🛠️ Tecnologias Utilizadas

- **[Hardhat](https://hardhat.org/)**: Framework principal para desenvolvimento de contratos inteligentes.
- **Solidity**: Linguagem de programação para contratos inteligentes (versão `^0.8.0`).
- **TypeScript**: Utilizado nos scripts de testes e implantação.
- **Mocha/Chai**: Frameworks para testes unitários.
- **Ethers.js**: Biblioteca para interagir com a blockchain Ethereum.

---

## 📂 Estrutura do Projeto

```text
📂 MeuProjetoHardhat
├── contracts/            # Contratos inteligentes em Solidity
├── ignition/modules/     # Script de implantação com Hardhat Ignition
├── test/                 # Testes unitários para o contrato inteligente
├── node_modules/         # Dependências do projeto
├── artifacts/            # Artefatos compilados pelo Hardhat
├── typechain-types/      # Tipagens geradas automaticamente
├── hardhat.config.ts     # Arquivo de configuração do Hardhat
└── package.json          # Configurações do Node.js e dependências
```

---

## 🔑 Contrato Inteligente: Storage.sol

O contrato **Storage** permite armazenar, recuperar e emitir eventos com números inteiros.

### **Código**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    uint256 private number;

    event NumberStored(uint256 newNumber);

    function store(uint256 num) public {
        number = num;
        emit NumberStored(num);
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

---

## 🧪 Testes Unitários

Os testes foram desenvolvidos utilizando Mocha/Chai e estão localizados na pasta `test/`. Eles cobrem os seguintes cenários:

1. **Armazenamento de números**: Verifica se os números são armazenados corretamente.
2. **Recuperação de números**: Verifica se os números armazenados podem ser recuperados.
3. **Eventos emitidos**: Testa se o evento `NumberStored` é emitido corretamente.

### **Exemplo de Teste**

```typescript
it("Deve armazenar um número corretamente", async function () {
  const tx = await storage.store(42);
  await tx.wait();

  const storedNumber = await storage.retrieve();
  expect(storedNumber).to.equal(42);
});
```

---

## 🚀 Implantação do Contrato

Utilizou-se o Hardhat Ignition para gerenciar a implantação:

### **Arquivo: `ignition/modules/Storage.ts`**

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StorageModule = buildModule("StorageModule", (m) => {
  const storage = m.contract("Storage", []);
  return { storage };
});

export default StorageModule;
```

### **Comando para Implantação**

1. Execute o Hardhat Ignition:
   ```bash
   npx hardhat ignition run ignition/modules/Storage.ts
   ```

2. O contrato será implantado na rede Ethereum local.

---

## 🔨 Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados.
- Dependências instaladas:
  ```bash
  npm install
  ```

### Passo a Passo

1. **Configurar o ambiente Hardhat**:
   - Edite o arquivo `hardhat.config.ts` para a rede desejada.

2. **Compilar o contrato**:
   ```bash
   npx hardhat compile
   ```

3. **Executar os testes**:
   ```bash
   npx hardhat test
   ```

4. **Implantar o contrato**:
   ```bash
   npx hardhat ignition run ignition/modules/Storage.ts
   ```

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
```

---

Adicione este conteúdo no arquivo `README.md` e suba no GitHub usando os seguintes comandos no terminal:

### **Comandos para Subir o Projeto no GitHub**

1. Inicialize o repositório Git:
   ```bash
   git init
   ```

2. Adicione os arquivos:
   ```bash
   git add .
   ```

3. Faça o commit:
   ```bash
   git commit -m "Primeira versão do projeto Storage com Hardhat"
   ```

4. Adicione o repositório remoto:
   ```bash
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   ```

5. Envie os arquivos:
   ```bash
   git branch -M main
   git push -u origin main
   ```
