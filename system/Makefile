build :
	$(MAKE) -C ../repl build
	$(MAKE) -C ../ping build
	$(MAKE) -C ../api build
	$(MAKE) -C ../math build
	$(MAKE) -C ../monitor build

build-api:
	$(MAKE) -C ../api build

build-ping:
	$(MAKE) -C ../ping build

build-math:
	$(MAKE) -C ../math build

build-repl:
	$(MAKE) -C ../repl build

build-monitor:
	$(MAKE) -C ../monitor build

k8s-apply:
	kubectl apply -f k8s-prod.yaml

get-services:
	kubectl get services

get-pods:
	kubectl get pods

dev_up:
	./node_modules/.bin/fuge shell fuge/compose-dev.yml

repl:
	rlwrap nc localhost 10000

monitor:
	node ../monitor/service-dev.js

port-forward-repl:
	kubectl port-forward $$(kubectl get pod | awk '/^repl/ && $$3 == "Running" { print $$1 } ') 10000:10000

port-forward-api:
	kubectl port-forward $$(kubectl get pod | awk '/^web/ && $$3 == "Running" { print $$1 } ') 3000:3000

.PHONY : build