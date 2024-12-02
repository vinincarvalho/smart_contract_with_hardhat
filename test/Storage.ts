import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("Storage Contract", function () {
  let Storage: any;
  let storage: Contract;
  let owner: any;

  beforeEach(async function () {
    Storage = await ethers.getContractFactory("Storage");
    
    [owner] = await ethers.getSigners();

    storage = await Storage.deploy();
  });

  describe("Função store", function () {
    it("Deve armazenar um número corretamente", async function () {
      const tx = await storage.store(42);
      await tx.wait();

      const storedNumber = await storage.retrieve();
      expect(storedNumber).to.equal(42);
    });

    it("Deve emitir o evento NumberStored com o valor correto", async function () {
      await expect(storage.store(100))
        .to.emit(storage, "NumberStored")
        .withArgs(100);
    });
  });

  describe("Função retrieve", function () {
    it("Deve retornar o número armazenado corretamente", async function () {
      await storage.store(123);
      const storedNumber = await storage.retrieve();
      expect(storedNumber).to.equal(123);
    });

    it("Deve retornar 0 se nenhum número tiver sido armazenado", async function () {
      const storedNumber = await storage.retrieve();
      expect(storedNumber).to.equal(0);
    });
  });
});
