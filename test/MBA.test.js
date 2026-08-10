const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MBA Token", function () {
  let mbaToken;
  let owner;
  let addr1;
  let addr2;
  const initialSupply = 1000000; // 1 million tokens

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const MBAToken = await ethers.getContractFactory("MBAToken");
    mbaToken = await MBAToken.deploy(initialSupply);
    await mbaToken.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await mbaToken.owner()).to.equal(owner.address);
    });

    it("Should assign the initial supply to the owner", async function () {
      const ownerBalance = await mbaToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(ethers.parseEther(initialSupply.toString()));
    });

    it("Should have correct name and symbol", async function () {
      expect(await mbaToken.name()).to.equal("MBA Token");
      expect(await mbaToken.symbol()).to.equal("MBA");
    });

    it("Should have correct decimals", async function () {
      expect(await mbaToken.decimals()).to.equal(18);
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.parseEther("100");
      await mbaToken.transfer(addr1.address, amount);
      expect(await mbaToken.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const amount = ethers.parseEther("1000000000");
      await expect(
        mbaToken.connect(addr1).transfer(owner.address, amount)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("Should fail if transferring to zero address", async function () {
      const amount = ethers.parseEther("100");
      await expect(
        mbaToken.transfer(ethers.ZeroAddress, amount)
      ).to.be.revertedWith("Cannot transfer to zero address");
    });
  });

  describe("Approval and TransferFrom", function () {
    it("Should approve tokens for spending", async function () {
      const amount = ethers.parseEther("100");
      await mbaToken.approve(addr1.address, amount);
      expect(await mbaToken.allowance(owner.address, addr1.address)).to.equal(amount);
    });

    it("Should transfer tokens using transferFrom", async function () {
      const amount = ethers.parseEther("100");
      await mbaToken.approve(addr1.address, amount);
      await mbaToken.connect(addr1).transferFrom(owner.address, addr2.address, amount);
      expect(await mbaToken.balanceOf(addr2.address)).to.equal(amount);
    });

    it("Should fail if allowance is insufficient", async function () {
      const amount = ethers.parseEther("100");
      await mbaToken.approve(addr1.address, ethers.parseEther("50"));
      await expect(
        mbaToken.connect(addr1).transferFrom(owner.address, addr2.address, amount)
      ).to.be.revertedWith("Insufficient allowance");
    });
  });

  describe("Increase/Decrease Allowance", function () {
    it("Should increase allowance", async function () {
      await mbaToken.approve(addr1.address, ethers.parseEther("100"));
      await mbaToken.increaseAllowance(addr1.address, ethers.parseEther("50"));
      expect(await mbaToken.allowance(owner.address, addr1.address)).to.equal(
        ethers.parseEther("150")
      );
    });

    it("Should decrease allowance", async function () {
      await mbaToken.approve(addr1.address, ethers.parseEther("100"));
      await mbaToken.decreaseAllowance(addr1.address, ethers.parseEther("30"));
      expect(await mbaToken.allowance(owner.address, addr1.address)).to.equal(
        ethers.parseEther("70")
      );
    });
  });

  describe("Minting", function () {
    it("Should mint tokens to an address", async function () {
      const amount = ethers.parseEther("500");
      await mbaToken.mint(addr1.address, amount);
      expect(await mbaToken.balanceOf(addr1.address)).to.equal(amount);
    });

    it("Should increase total supply when minting", async function () {
      const initialTotalSupply = await mbaToken.totalSupply();
      const amount = ethers.parseEther("1000");
      await mbaToken.mint(addr1.address, amount);
      expect(await mbaToken.totalSupply()).to.equal(initialTotalSupply + amount);
    });

    it("Should fail if non-owner tries to mint", async function () {
      const amount = ethers.parseEther("100");
      await expect(
        mbaToken.connect(addr1).mint(addr2.address, amount)
      ).to.be.revertedWith("Only owner can call this function");
    });
  });

  describe("Burning", function () {
    it("Should burn tokens from an address", async function () {
      const burnAmount = ethers.parseEther("100");
      const initialBalance = await mbaToken.balanceOf(owner.address);
      await mbaToken.burn(owner.address, burnAmount);
      expect(await mbaToken.balanceOf(owner.address)).to.equal(initialBalance - burnAmount);
    });

    it("Should decrease total supply when burning", async function () {
      const initialTotalSupply = await mbaToken.totalSupply();
      const burnAmount = ethers.parseEther("100");
      await mbaToken.burn(owner.address, burnAmount);
      expect(await mbaToken.totalSupply()).to.equal(initialTotalSupply - burnAmount);
    });

    it("Should fail if non-owner tries to burn", async function () {
      const amount = ethers.parseEther("100");
      await expect(
        mbaToken.connect(addr1).burn(owner.address, amount)
      ).to.be.revertedWith("Only owner can call this function");
    });
  });

  describe("Ownership", function () {
    it("Should transfer ownership to a new owner", async function () {
      await mbaToken.transferOwnership(addr1.address);
      expect(await mbaToken.owner()).to.equal(addr1.address);
    });

    it("Should fail if non-owner tries to transfer ownership", async function () {
      await expect(
        mbaToken.connect(addr1).transferOwnership(addr2.address)
      ).to.be.revertedWith("Only owner can call this function");
    });
  });
});
