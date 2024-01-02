import { Deposit, Withdraw } from "../generated/schema"
import { VaultDeposit, VaultWithdraw } from "../generated/lendle-meth-looped/CircuitVault" 

 
export function handleVaultDeposit(event: VaultDeposit): void {
  let deposit = new Deposit(event.transaction.hash.toHex());
  deposit.id =  event.transaction.hash.toHex();
  deposit.account = event.transaction.from;
  deposit.amount = event.params._amount;
  deposit.timestamp = event.block.timestamp;
  deposit.vault = event.address;
  deposit.save();
}

export function handleVaultWithdraw(event: VaultWithdraw): void {
    let withdraw = new Withdraw(event.transaction.hash.toHex());
    withdraw.id =  event.transaction.hash.toHex();
    withdraw.account = event.transaction.from;
    withdraw.amount = event.params.r;
    withdraw.timestamp = event.block.timestamp;
    withdraw.vault = event.address;
    withdraw.save();
  }