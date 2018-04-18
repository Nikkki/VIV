<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile @click="goToAllQuestions()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              All Questions
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app class="py-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <div class="spacer"></div>
      <v-flex xs4 ms4xs4 md4xs4 lg4xs4  class="text-xs-right">
        <v-text-field v-model="inputGoToQuestion" @keyup.enter="goToQuestion()" name="input-1" :label="labelGoToQuestion()" id="testing"></v-text-field>
      </v-flex>
      <v-btn color="info" @click="goToQuestion()"  >Go to</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
  
  
            <router-view></router-view>
  
  
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      labelText: null
    }),
    props: {
      source: String
    }
  };
</script>


<script>
import router from "./router/index";
import { mapGetters } from "vuex";

  export default {
    data: () => ({
      drawer: null,
      inputGoToQuestion: ''
    }),
    props: {
      source: String
    },
    methods: {
      goToQuestion(){
        router.push({path: '/question/' + this.inputGoToQuestion})
        this.inputGoToQuestion = '';
      },
      labelGoToQuestion(){
        return 'Enter Number of question ('  +
          this.lastQuestionNumb + '-' +
          this.firstQuestionNumb + ')'
      },
      goToAllQuestions(){
        router.push({path: '/questions/'})
      }
    },
    computed: {
      ...mapGetters({
        lastQuestion: "lastQuestion",
        firstQuestion: "firstQuestion",
      }),
      lastQuestionNumb() {
        return  this.lastQuestion.numb;
      },
      firstQuestionNumb(){
        return this.firstQuestion.numb;
      },
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
