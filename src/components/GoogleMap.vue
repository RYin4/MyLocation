<template>
<div>
  <div>
    <body>
      <div class="container">
        <div class="jumbotron">
          <h6>BY RANDY YIN</h6>
          <h4 class="display-4">My Location</h4>
          <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
          <hr>
          <label>
            <input id="lat" v-model="latitude" type="number">
            <input id="lng" v-model="longitude" type="number">
            <button @click="addMarker">Show My Location</button>
          </label>
        </div>
      </div>
    </body>
    <br>
  </div>
  <br>
  <gmap-map
    :center="center"
    :options="{ disableDefaultUI: true, draggable: false, clickableIcons: false}"
    :zoom="15"
    style="width: 100%; height: 500px;"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 33.812, lng: -117.919 },
      markers: [],
      latitude: " ",
      longitude: " ",
      location: " ",
      geoLatitude: " ",
      geoLongitude: " "
    };
  },

  methods: {
    addMarker() {
      console.log(this.latitude);
      console.log(this.longitude);
      const marker = {
        lat: parseFloat(this.latitude),
        lng: parseFloat(this.longitude)
      };
      this.markers.push({ position: marker });
      this.center = marker;
    }
  },
};
</script>