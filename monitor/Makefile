NAME = monitor
VERSION = 1

build :
	docker build -t rualatngua/k8s-$(NAME):$(VERSION) .
	docker push rualatngua/k8s-$(NAME):$(VERSION)

clean :
	rm *~

.PHONY : build clean