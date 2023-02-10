## Docker basic command

### Docker login
```sh
# แบบ simple จะต้องใส่ username, password ทีหลัง
docker login 

# แบบนี้สามารถใส่ username, password ไปได้เลย
docker login -u myuser -p mypassword

# แบบนี้สามารถใส่ username ไปได้เลย และใส่ password ทีหลัง
docker login -u myuser
```

#### Docker logout
```sh
# Logout จะไปลบ Credentials ที่ได้ login มาในเครื่อง
docker logout 
```

### Docker images
```sh
# แสดง images ที่มีอยู่ในเครื่อง
docker images 

# แสดง images ที่มีอยู่ในเครื่อง แบบ full image id
docker images --no-trunc 
```

### Docker search
```sh
# ค้นหา images จาก Docker registry
# docker search <IMAGE NAME>
docker search ubuntu
```

### Docker pull
```sh
# ดึง images ที่เราระบุ จาก registry https://hub.docker.com/ ลงมาไว้ในเครื่อง
# docker pull <IMAGE NAME>
docker pull ubuntu
```

### Docker run
```sh
# -d : run แบบ background mode
# --name : กำหนดชื่อ Container name ถ้าไม่ระบุมันจะ random ชื่อ
# -e : กำหนด Environment ของ Container ต้องดูว่าแต่ล่ะ images มีอะไรให้เราตั้งค่าได้บ้าง
# -p : กำหนด ports ที่จะให้ เครื่อง host คุยกับ container
# -v : Mount Volume จากเครื่อง host คุยกับ container 
docker run -p 80:80 -d --name my-nginx nginx

docker run -p 80:80 \
  -v ./:/usr/share/nginx/html \
  --name web-demo nginx \

docker run -d -it --name mysql \
  -e MYSQL_ROOT_PASSWORD=password \
  -p 3306:3306 \
  -v /your_path/mysql:/var/lib/mysql mysql
```

### Docker ps
```sh
# แสดง container ที่กำลังทำงานในเครื่อง
docker ps 

# แสดง container ทั้งหมดทั้งที่กำลังทำงาน และ ไม่ได้ทำงานอยู่
# -s : แสดง Size Container
docker ps -a -s

# แสดง container โดยการระบุ conatiner id หรือ host name 
# -s : แสดง Size Container
docker ps <CONTAINER ID> -s
```

### Docker cp
```sh
# copy file from host to container
docker cp /my_file.txt:/usr/local/

# copy file from container to host
docker cp <CONTAINER ID>:/file/path/within/container /host/path/targe
```

### Docker rm
```sh
# ลบ container ที่ระบุ, ถ้า running อยู่ไม่ได้จะลบไม่ได้ ต้องไป stop ก่อน
docker rm <CONTAINER ID> 

# บังคับลบ
docker rm -f <CONTAINER ID> 
```

### Docker rmi
```sh
# ลบ docker images
docker rmi <IMAGE ID>
```

### Docker start
```sh
# start container ที่ stop อยู่ ไม่ใช่การ run images
docker start <CONTAINER ID>
```

### Docker stop
```sh
# stop container ที่ start อยู่
docker stop <CONTAINER ID>
```

### Docker pause/unpause
```sh
# แช่แข็ง container
docker pause <CONTAINER ID> 
# ยกเลิกการแช่แข็ง
docker unpause <CONTAINER ID> 
```

### Docker exec
```sh
# เข้าไป console container
docker exec -it <CONTAINER ID> bash 
```

### Docker logs
```sh
docker logs // โชว์ Logs container
docker commit <CONTAINER_ID> <NEW IMAGE NAME>
```


### Docker push
```sh
# Push imges เราขึ้น Docker registry
docker push <ACCOUNT>/<NAME_IMAGE> 
```

### Docker tag
```sh
# หากไม่กำหนด tag จะเป็น latest 
docker tag nginx mynginx
docker tag nginx mynginx:2.0.0
```