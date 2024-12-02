// Este módulo utiliza o Hardhat Ignition para gerenciar a implantação do contrato Storage.
// Saiba mais em https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StorageModule = buildModule("StorageModule", (m) => {
  const storage = m.contract("Storage", []);

  return { storage };
});

export default StorageModule;
