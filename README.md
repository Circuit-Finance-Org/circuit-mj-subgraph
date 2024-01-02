

# Queries

```
query GetDeposits {
  deposits(
    where: {vault: "0xa7cF0544fDaC7e173fb73733429AaE8a27Cb2637"},
    first: 1000,  # Number of results to return
    orderBy: timestamp,
    orderDirection: desc  # Newest first
  ) {
    id
    account
    amount
    timestamp
  }
}
```

```
query GetWithdrawals {
  withdraws(
    where: {vault: "0xa7cF0544fDaC7e173fb73733429AaE8a27Cb2637"},
    first: 1,  # Number of results to return
    orderBy: timestamp,
    orderDirection: desc  # Newest first
  ) {
    id
    account
    amount
    timestamp
  }
}

```