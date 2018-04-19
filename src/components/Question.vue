<template>
  <section >
    <v-card class="py-3 px-3" v-if="question">
          <h1 class="text-sm-left question">
            {{question.numb}}. {{question.question}}
        </h1>
        <h2 class="answer pl-2 pt-2 text-sm-left">
          {{question.answer}}
        </h2>
        <ol class="text-sm-left pl-2 " v-for="(sup, index) in question.sups">
          {{index}}
          <li class="card-link" v-for="link in sup"> 
            <a  target="_blank" :href=link.link>{{link.text}} </a>
          </li>
        </ol>
    </v-card>
    <v-card v-else>
      <h1>No such question with number {{numb}}</h1>
      <v-btn color="info" @click="goBack()">Go BAck</v-btn>
    </v-card>
    <v-btn v-if="question" color="warning" :disabled="isBackQuestion" @click="back()">BAck</v-btn>
    <v-btn v-if="question" color="success" :disabled="isNextQuestion" @click="next()">NExt</v-btn>
  </section>

</template>

<script>
import { mapGetters } from "vuex";
import router from "../router/index";

export default {
  data() {
    return {
      abc: this.numb
    };
  },
  props: ["numb"],

  methods: {
    next() {
      router.push({ path: "/question/" + (+this.numb + 1) });
    },
    back() {
      router.push({ path: "/question/" + (+this.numb - 1) });
    },
    goBack() {
      router.go(-1);
    }
  },

  computed: {
    ...mapGetters({
      questions: "questions",
      lastQuestion: "lastQuestion",
      firstQuestion: "firstQuestion"
    }),

    isNextQuestion() {
      let index = this.questions.map(el => el.numb).indexOf(+this.numb + 1);
      return index === -1;
    },
    isBackQuestion() {
      let index = this.questions.map(el => el.numb).indexOf(+this.numb - 1);
      return index === -1;
    },

    question() {
      let index = this.questions.map(el => el.numb).indexOf(+this.numb);
      if (index !== -1) return this.questions[index];
      return null;
    }
  }
};
</script>

<style scoped>
.question {
  font-weight: bold;
 
}

.answer{
   margin-bottom: 7px;
}

.card-link {
  margin: 4px;
}
.card-link a {
  padding: 5px;
}
</style>

