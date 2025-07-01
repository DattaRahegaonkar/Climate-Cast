
# 🌦️ Climate-Cast

**Climate-Cast** is a responsive and modern weather forecasting app built with **React**, **Tailwind CSS**, **Vite**, **Fetch API** and **OpenWeatherMap API**. It allows users to search for weather conditions by city name and view real-time data like temperature, humidity, wind speed, and weather status.

## 🚀 Features

- 🔍 Search weather by city
- 📍 Optionally fetch user’s current location
- 🌡️ Real-time temperature, humidity, and conditions
- 🎨 Beautiful and responsive Tailwind UI

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Weather API**: OpenWeatherMap (or any external API)
- **Deployment**: Docker, Kubernetes, Jenkins

# ⚙️ Local Setup


1. Clone the repository
```
git clone https://github.com/yourusername/climate-cast.git
```

```
cd climate-cast
```

2. Install Dependencies

```
npm install
```

3. Add .env File

```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start Dev Server

```
npm run dev
```

# 🐳 Docker Deployment

1. Clone the repository
```
git clone https://github.com/yourusername/climate-cast.git
```

```
cd climate-cast
```

2. Build the Climate-cast app

```
docker build -t climate-cast-image .
```

3. Create Container

```
docker run -d -name climate-app -p 5000:5173 climate-cast-image:latest
```

4. Visit

```
http://localhost:5000
```

# ☸️ Kubernetes Deployment

1. Clone the repository
```
git clone https://github.com/yourusername/climate-cast.git
```

```
cd climate-cast
```

2. Build image with username of Docker Hub and image name (i.e. <username 0f docker hub>/<image name>)

```
docker build -t your_dockerhub_username/climate-cast-image .
```

3. Push on Docker Hub

```
docker push your_dockerhub-username/climate-cast
```

4. Create Kubernetes YAMLs Files

namespace.yml
deployment.yml
service.yml

5. Deploy to Cluster

```
kubectl apply -f <each yml file one by one>
OR
kubectl apply -f .  (at time run all)
```

# OutPut

![image](https://github.com/DattaRahegaonkar/Climate-Cast/blob/a0f1e1e11450efcf57424c8a579b5077adf208ca/Screenshot%202024-09-21%20002337.png)
![image](https://github.com/DattaRahegaonkar/Climate-Cast/blob/a0f1e1e11450efcf57424c8a579b5077adf208ca/Screenshot%202024-09-21%20002518.png)
