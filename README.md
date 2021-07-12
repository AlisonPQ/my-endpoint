# my-endpoint

This simple endpoint `http://host:8080/api/get-health` that is exposed with nodejs is going to be used as an example in order to dockerize it.

## Docker steps
### Requirements

- Install `docker` on you host machine

### Steps to run
#### To create the image 

`docker build -t myendpoint:v0.1 .`

#### To run the container from the image created

- Execute `docker images` to see images list
- Copy `myendpoint` image id
- Execute 
`docker run -d --name myendpoint -p 3000:8080 [image_id]`
