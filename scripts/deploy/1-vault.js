async function main() {
  const Vault = await ethers.getContractFactory('ReaperVaultv1_3');

  //const usdcAddress = "0x04068da6c83afcfa0e13ba15a6696662335d5b75";
  //const fUSDTAddress = '0x049d68029688eabf473097a2fc38ef61633a3c7a';
  const wbtcAddress = '0x321162Cd933E2Be498Cd2267a90534A804051b11';
  const tokenName = 'WBTC SCREAM Single Sided';
  const tokenSymbol = 'rf-scWBTC';
  const depositFee = 0;
  const tvlCap = 45000000;

  const vault = await Vault.deploy(wbtcAddress, tokenName, tokenSymbol, depositFee, tvlCap);

  await vault.deployed();
  console.log('Vault deployed to:', vault.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
