IMAGE=rn-first-app
TAG=latest

build:
	docker build -t $(IMAGE):$(TAG) .

run:
	docker rm $(IMAGE); docker run --name $(IMAGE) -t -i -p 19002:19002 $(IMAGE):$(TAG)


destroy:
	docker kill $(IMAGE); docker rmi -f $(IMAGE):$(TAG)
