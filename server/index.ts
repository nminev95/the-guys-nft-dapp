import express from 'express';
import cors from 'cors';
import { verifyTypedData, ethers, hexlify, getBytes, keccak256 } from 'ethers';
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/mint/signature', (req, res) => {
  const domain = {
    name: 'TheGuysNFT',
    version: '1.0.0',
    chainId: 1,
    verifyingContract: '0x1111111111111111111111111111111111111111',
  };

  const types = {
    'Mint NFT': [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'content', type: 'string' },
    ],
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
  };

  const mail = {
    from: {
      name: 'Alice',
      wallet: '0x2111111111111111111111111111111111111111',
    },
    to: {
      name: 'Bob',
      wallet: '0x3111111111111111111111111111111111111111',
    },
    content: 'Hello!',
  };
  const { signature } = req.body;
  console.log(signature);
  console.log(keccak256(mail));
  const address = verifyTypedData(domain, types, mail, signature);
  console.log(address);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
