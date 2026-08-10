# MBA Token 🚀

**Digital Asset for Global Travel and Trade Payments**

MBA Token is a comprehensive ERC20-compliant smart contract deployed by Al Barqawi Travel Agency to facilitate secure and efficient payments in travel, trade, and exhibition services across Africa [...]

---

## 📋 Features

✅ **Full ERC20 Compliance** - Standard token implementation with all required functions
✅ **Transfer Functionality** - Send tokens between addresses
✅ **Approval System** - Allow third-party spending with `approve()` and `transferFrom()`
✅ **Minting** - Owner can create new tokens
✅ **Burning** - Owner can permanently remove tokens
✅ **Ownership Transfer** - Secure ownership management
✅ **Security** - Input validation and protection against common vulnerabilities

---

## 🛠️ Technical Specifications

| Property | Value |
|----------|-------|
| **Name** | MBA Token |
| **Symbol** | MBA |
| **Decimals** | 18 |
| **Standard** | ERC20 |
| **Language** | Solidity 0.8.0 |
| **License** | MIT |

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/k6mido-ux/MBA-Token.git
cd MBA-Token

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Add your private key and RPC URLs to .env
```

---

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests with gas reporting
HARDHAT_REPORT_GAS=true npm test
```

### Test Coverage
- ✅ Deployment tests
- ✅ Transfer functionality
- ✅ Approval and transferFrom
- ✅ Increase/Decrease allowance
- ✅ Minting and burning
- ✅ Ownership management
- ✅ Error cases and validations

---

## 🚀 Deployment

### Local Testing (Hardhat)

```bash
# Compile the contract
npm run compile

# Deploy to local network
npx hardhat run scripts/deploy.js
```

### Testnet Deployment (Sepolia)

```bash
# Deploy to Sepolia testnet
npm run deploy:testnet
```

### Mainnet Deployment

```bash
# Deploy to Ethereum mainnet
npm run deploy
```

⚠️ **Important**: Always test thoroughly on testnet before mainnet deployment!

---

## 📋 متطلبات النشر (Deployment Requirements)

قبل نشر عقد MBA Token على أي شبكة، تأكد من توفر المتطلبات التالية:

### 1️⃣ **متطلبات البيئة (Environment Requirements)**
- ✅ Node.js v14 أو أعلى
- ✅ npm أو yarn
- ✅ Git
- ✅ محفظة Ethereum مع رصيد من ETH
- ✅ مفتاح خاص آمن (Private Key) - لا تشاركه مع أحد
- ✅ Etherscan API Key (اختياري - للتحقق من العقد)

### 2️⃣ **متطلبات الشبكة (Network Requirements)**

#### **لنشر على Sepolia Testnet:**
- ETH من Sepolia Testnet (يمكن الحصول عليها من [Sepolia Faucet](https://sepoliafaucet.com/))
- RPC URL لـ Sepolia
- إضافة Sepolia إلى محفظتك

#### **لنشر على Ethereum Mainnet:**
- ETH فعلي (حقيقي) - تكاليف الغاز مرتفعة
- RPC URL آمن (من Infura أو Alchemy)
- عنوان محفظة مثبت (Verified Wallet)

#### **لنشر على Polygon:**
- MATIC من Polygon mainnet
- RPC URL: `https://polygon-rpc.com/`
- Gas سعر منخفض

#### **لنشر على Binance Smart Chain:**
- BNB للرسوم
- RPC URL: `https://bsc-dataseed.binance.org/`

### 3️⃣ **متطلبات الأمان (Security Requirements)**

```
✅ تشفير المفتاح الخاص في .env
✅ عدم رفع .env على GitHub
✅ استخدام hardware wallet (اختياري - موصى به للمبالغ الكبيرة)
✅ التحقق من عنوان العقد قبل النشر
✅ اختبار كامل على testnet أولاً
✅ التحقق من وظائف العقد بعد النشر
```

### 4️⃣ **متطلبات ملف .env**

```env
# Ethereum Mainnet
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
ETHEREUM_PRIVATE_KEY=your_private_key_here

# Sepolia Testnet
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
SEPOLIA_PRIVATE_KEY=your_private_key_here

# Polygon
POLYGON_RPC_URL=https://polygon-rpc.com/
POLYGON_PRIVATE_KEY=your_private_key_here

# Binance Smart Chain
BSC_RPC_URL=https://bsc-dataseed.binance.org/
BSC_PRIVATE_KEY=your_private_key_here

# Etherscan (اختياري - للتحقق)
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### 5️⃣ **متطلبات التحقق (Verification Requirements)**

لتحقق من العقد على Etherscan:

```bash
npx hardhat verify --network sepolia CONTRACT_ADDRESS "Constructor arguments if any"
```

---

## 📈 Roadmap - خارطة الطريق

مراحل النشر والتطوير المخطط لها:

### المرحلة 1️⃣: **الاختبار والنشر الأولي**
- [x] بناء العقد الذكي
- [x] اختبار محلي (Hardhat)
- [ ] **نشر على Sepolia Testnet** ⏳
- [ ] التحقق من العقد على Sepolia
- [ ] اختبار جميع الوظائف على Testnet

### المرحلة 2️⃣: **النشر على Mainnet**
- [ ] **نشر على Ethereum Mainnet** 🎯
  - عنوان العقد: قريباً
  - رابط Etherscan: قريباً
- [ ] التحقق من العقد على Etherscan
- [ ] إطلاق موقع البيانات الرسمي

### المرحلة 3️⃣: **توسيع متعدد السلاسل**
- [ ] **نشر على Polygon** 
  - تقليل رسوم المعاملات
  - سرعة معاملات أعلى
- [ ] **نشر على Binance Smart Chain**
  - الوصول إلى مستخدمي BSC
  - تكاليف غاز منخفضة

### المرحلة 4️⃣: **تطبيقات الويب والجوال**
- [ ] **تطوير محفظة جوال (Mobile Wallet)**
  - تطبيق iOS
  - تطبيق Android
  - إدارة الرصيد والتحويلات
- [ ] **إنشاء لوحة تحكم ويب (Web Dashboard)**
  - عرض الرصيد
  - تحويل الرموز
  - سجل المعاملات
  - إدارة الأذونات

### المرحلة 5️⃣: **التكاملات والخدمات**
- [ ] **التكامل مع بوابات الدفع**
  - Stripe integration
  - PayPal integration
  - Wise integration
- [ ] **API للتطبيقات الخارجية**
  - REST API
  - WebSocket للتحديثات الفورية
  - Documentation

### المرحلة 6️⃣: **الحوكمة والمجتمع**
- [ ] **نظام الحوكمة المجتمعية (Community Governance)**
  - التصويت على القرارات
  - اقتراح المشاريع الجديدة
  - إدارة الميزانية
- [ ] **برنامج المكافآت (Rewards Program)**
  - حوافز للمستخدمين النشطين

### المرحلة 7️⃣: **الجسور متعددة السلاسل**
- [ ] **Bridge to Multiple Chains**
  - نقل الرموز بين Ethereum و Polygon
  - نقل الرموز بين Ethereum و BSC
  - نقل الرموز بين Polygon و BSC

### المرحلة 8️⃣: **الميزات المتقدمة**
- [ ] **عقود ذكية متقدمة**
  - Staking
  - Farming
  - DAO governance
- [ ] **أدوات Analytics**
  - لوحات معلومات للإحصائيات
  - تتبع حركة الرموز
  - تقارير مفصلة

---

## 📊 حالة النشر الحالية (Deployment Status)

| الشبكة | الحالة | العنوان | الرابط |
|--------|--------|--------|--------|
| **Sepolia Testnet** | ⏳ قريباً | - | - |
| **Ethereum Mainnet** | ⏳ قريباً | - | - |
| **Polygon** | ⏳ مخطط | - | - |
| **BSC** | ⏳ مخطط | - | - |

---

## 📚 Smart Contract Functions

### Standard ERC20 Functions

#### `transfer(address to, uint256 amount) → bool`
Transfer tokens from the caller's address to the recipient.

```solidity
// Transfer 100 MBA tokens
mbaToken.transfer(recipientAddress, ethers.parseEther("100"));
```

#### `approve(address spender, uint256 amount) → bool`
Allow a spender to transfer up to the specified amount of tokens.

```solidity
// Approve 50 MBA tokens for spending
mbaToken.approve(spenderAddress, ethers.parseEther("50"));
```

#### `transferFrom(address from, address to, uint256 amount) → bool`
Transfer tokens on behalf of another address (requires approval).

```solidity
// Transfer 50 MBA tokens on behalf of another address
mbaToken.transferFrom(fromAddress, toAddress, ethers.parseEther("50"));
```

#### `balanceOf(address account) → uint256`
Get the token balance of an address.

```solidity
const balance = await mbaToken.balanceOf(userAddress);
```

#### `totalSupply() → uint256`
Get the total supply of MBA tokens.

```solidity
const supply = await mbaToken.totalSupply();
```

#### `allowance(address owner, address spender) → uint256`
Check how many tokens a spender is allowed to transfer.

```solidity
const allowed = await mbaToken.allowance(ownerAddress, spenderAddress);
```

### Extended Functions

#### `increaseAllowance(address spender, uint256 addedValue) → bool`
Safely increase the allowance for a spender.

```solidity
mbaToken.increaseAllowance(spenderAddress, ethers.parseEther("50"));
```

#### `decreaseAllowance(address spender, uint256 subtractedValue) → bool`
Safely decrease the allowance for a spender.

```solidity
mbaToken.decreaseAllowance(spenderAddress, ethers.parseEther("30"));
```

#### `mint(address to, uint256 amount) → bool` (Owner Only)
Create new tokens and assign them to an address.

```solidity
// Mint 1000 MBA tokens
mbaToken.mint(recipientAddress, ethers.parseEther("1000"));
```

#### `burn(address from, uint256 amount) → bool` (Owner Only)
Permanently remove tokens from circulation.

```solidity
// Burn 500 MBA tokens
mbaToken.burn(holderAddress, ethers.parseEther("500"));
```

#### `transferOwnership(address newOwner) → bool` (Owner Only)
Transfer contract ownership to a new address.

```solidity
mbaToken.transferOwnership(newOwnerAddress);
```

---

## 🔐 Security Considerations

1. **Input Validation**: All functions validate input parameters
2. **Zero Address Protection**: Prevents transfers to zero address
3. **Balance Checks**: Ensures sufficient balance before transfers
4. **Allowance Checks**: Verifies allowance before transferFrom
5. **Owner Only**: Critical functions restricted to contract owner
6. **No Reentrancy**: Simple arithmetic operations prevent reentrancy attacks

---

## 📝 Events

The contract emits the following events:

```solidity
// Standard ERC20 events
event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);

// Custom events
event Mint(address indexed to, uint256 amount);
event Burn(address indexed from, uint256 amount);
```

---

## 🌐 Integration Examples

### Using Web3.js

```javascript
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_KEY');

const contractAddress = '0x...'; // Your contract address
const abi = require('./abi.json'); // Contract ABI

const mbaToken = new web3.eth.Contract(abi, contractAddress);

// Get balance
const balance = await mbaToken.methods.balanceOf(userAddress).call();
console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'MBA');
```

### Using Ethers.js

```javascript
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_KEY');
const contractAddress = '0x...'; // Your contract address
const abi = require('./abi.json'); // Contract ABI

const mbaToken = new ethers.Contract(contractAddress, abi, provider);

// Get total supply
const totalSupply = await mbaToken.totalSupply();
console.log('Total Supply:', ethers.formatEther(totalSupply), 'MBA');
```

---

## 📊 Use Cases

1. **Travel Payments** - Facilitate payments for flights, hotels, and travel services
2. **Trade Settlements** - Enable cross-border payments in African trade
3. **Exhibition Fees** - Streamline payments for trade exhibitions
4. **Currency Exchange** - Act as a bridge currency in African commerce
5. **Loyalty Programs** - Reward frequent travelers and traders

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: k6mido@gmail.com
- Visit: [Al Barqawi Travel Agency](https://www.albarqawi.com)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Hardhat](https://hardhat.org/)
- Follows [OpenZeppelin](https://openzeppelin.com/) standards
- Inspired by the need for efficient cross-border payments in Africa

---

**Made with ❤️ by [k6mido-ux](https://github.com/k6mido-ux)**
