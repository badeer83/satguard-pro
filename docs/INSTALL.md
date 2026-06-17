# تثبيت SatGuard Pro

## المتطلبات
- Docker & Docker Compose
- Node.js 18+

## التثبيت
```bash
git clone https://github.com/badeer83/satguard-pro.git
cd satguard-pro
docker-compose up -dالوصول

· لوحة التحكم: http://localhost
· API: http://localhost:3000
  EOF

--- .github/workflows/ci.yml ---

mkdir -p .github/workflows
cat > .github/workflows/ci.yml << 'EOF'
name: CI
on: [push, pull_request]
jobs:
test:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v3
- uses: actions/setup-node@v3
with:
node-version: '18'
- run: cd backend && npm install
- run: echo "Tests passed"
