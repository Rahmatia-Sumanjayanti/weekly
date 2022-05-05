<template>
  <v-app id="inspire">

    <!-- Navbar -->
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
     
         <h2>Rahmatia Sumanjayanti - Kelas D - Vue JS</h2>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
        </v-responsive>
      </v-container>
    </v-app-bar>

    <!-- Sidebar -->

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
           <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                
                >
                  <v-list-item-content >
                    <v-list-item-title>
                      
                      <router-link class="route" to="/section1">2 - Git</router-link><br><br>
                      <router-link class="route" to="/section2">3 - UI UX</router-link><br><br>
                      <router-link class="route" to="/section3">4 - Figma</router-link><br><br>
                      <router-link class="route" to="/section4">5 - HTML</router-link><br><br>
                      <router-link class="route" to="/section5">6 - CSS</router-link><br><br>
                      <router-link class="route" to="/section6">7 - Bootstrap</router-link><br><br>
                      <router-link class="route" to="/section7">8 - JS</router-link><br><br>
                      <router-link class="route" to="/section8">9 - Clean Code</router-link><br><br>
                      <router-link class="route" to="/section9">10 - Frontend Fundamental</router-link><br><br>

                      <router-link class="route" to="/section10">11 - Vue Fundamental</router-link><br><br>
                      <router-link class="route" to="/section11">12 - Vue CLI </router-link><br><br>
                      <router-link class="route" to="/section12">13 - Vue Components</router-link><br><br>
                      <router-link class="route" to="/section13">14 - Vue Helpers</router-link><br><br>
                      <router-link class="route" to="/section14">15 - Vue Data</router-link><br><br>
                      <router-link class="route" to="/section15">16 - Vue Data</router-link><br><br>
                      <router-link class="route" to="/section16">17 - UI Framework</router-link><br><br>
                      <router-link class="route" to="/section17">18 - Working Together</router-link><br><br>
                      <router-link class="route" to="/section18">19 - Vue With Nuxt</router-link><br><br>
                      <router-link class="route" to="/section19">20 - Introduction Algortihm</router-link><br><br>

                      <router-link class="route" to="/section20">21 - Understanding GraphQL Basic</router-link><br><br>
                      <router-link class="route" to="/section21">22 - Relational Database</router-link><br><br>
                      <router-link class="route" to="/section22">23 - GraphQL Query</router-link><br><br>
                      <router-link class="route" to="/section23">24 - GraphQL Mutation</router-link><br><br>
                      <router-link class="route" to="/section24">25 - GraphQL Subscription</router-link><br><br>
                      
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Konten -->
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- <h1 class="pt-5 pl-5">Judul</h1>
              <br>
              <p class="pt-5 pl-5 pr-5">Deskripsi </p>

              <h2 class="pt-5 pl-5 pr-5">Foto</h2>
               -->
               <router-view/>
               
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
  components: { 
    
  },
    data: () => ({

    }),
  }
</script>

<style scoped>
.route{
  text-decoration: none;
  color: black;
}
.route:hover{
  color: gray;
}
</style>