Change to `system` folder

## For test: using Postman Runner to test

1. Import [Postman collection](https://www.getpostman.com/collections/5b68a0f88ac77a85e215)
2. Run `make port-forward-api`
3. Run Postman Runner

## For production

```bash
cd system
make build

make k8s-apply
make k8s-pods

# make port forward for web (3000)
kubectrl port-forwarding web-xxxxx 3000:3000
curl localhost:3000 # or http localhost:3000

# make port forward for consul (8500)
kubectrl port-forwarding consul-xxxxx 3000:3000
open localhost:8500

# make port forward for repl (port 10000)
kubectrl port-forwarding repl-xxxxx 10000:10000
rlwrap telnet localhost 10000
```

## For deployment

```bash
cd system
make dev_up
make repl
make monitor
```
