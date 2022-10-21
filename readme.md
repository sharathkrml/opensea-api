**SETUP**

`export OPENSEA_API={{opensea api}}`

**What we’re looking for [OFF CHAIN DATA]**

**_A single api which gives up listings & offers based on time_**

1. `Item listed → listing price`
2. `English auction → highest bid price`
3. `Dutch auction → price according to time ????`
4. `Item sold → Selling price`

**What we were able to get**

1. Was able to use **[Stream API](https://docs.opensea.io/reference/stream-api-overview) to listen to `Item listed` ,`Item received bid` , `Item sold`** to get live price data
1. Wasn’t able to get the current/historical price data using REST APIs
