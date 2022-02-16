async function main() {
  const vaultAddress = '0xC2cE269f3646a5F5bF1cCDa73c6cAB50f64012b6';
  const ERC20 = await ethers.getContractFactory('contracts/ERC20.sol:ERC20');
  //const fUSDTAddress = '0x049d68029688eabf473097a2fc38ef61633a3c7a';
  const WBTCAddress = '0x321162Cd933E2Be498Cd2267a90534A804051b11';
  const erc20 = await ERC20.attach(WBTCAddress);
  await erc20.approve(vaultAddress, ethers.utils.parseEther('100'));
  console.log('erc20 approved');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
