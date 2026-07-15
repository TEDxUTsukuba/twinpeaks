<template>
  <section class="section">
    <div
      class="columns is-multiline is-mobile"
      v-for="tier in tiers"
      :key="tier.value"
    >
      <div
        :class="['column', 'h-full', tier.columnClass]"
        v-for="partner in partnersOf(tier.value)"
        :key="partner.id"
      >
        <div class="nmp-dark has-text-centered">
          <figure class="image is-1by1 my-5" v-if="partner.logo">
            <img :src="partner.logo.url" :alt="partner.name" />
          </figure>
          <div>
            <p
              :class="[
                'partner-name',
                'has-text-weight-bold',
                'mb-2',
                tier.nameClass
              ]"
            >
              {{ partner.name }} <span v-if="$i18n.locale == 'ja'">様</span>
            </p>
            <a
              v-if="partner.url"
              class="button is-rounded is-white is-outlined is-small mb-4"
              :href="partner.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t("button.visitwebsite") }}
            </a>
          </div>
          <div
            class="is-inline-block has-text-centered mb-2 has-background-primary"
            v-if="partner.instagram || partner.facebook || partner.twitter"
          >
            <a
              v-if="partner.instagram"
              :href="partner.instagram"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="mdi mdi-instagram has-text-white is-size-4"
            /></a>
            <a
              v-if="partner.facebook"
              :href="partner.facebook"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="mdi mdi-facebook has-text-white is-size-4"
            /></a>
            <a
              v-if="partner.twitter"
              :href="partner.twitter"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="mdi mdi-twitter has-text-white is-size-4"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      shuffled: [...this.partners],
      tiers: [
        {
          value: "1",
          columnClass: "is-4-tablet is-full-mobile",
          nameClass: "is-size-5"
        },
        {
          value: "2",
          columnClass: "is-3-tablet is-9-mobile",
          nameClass: "is-size-6"
        },
        {
          value: "3",
          columnClass: "is-2-tablet is-6-mobile",
          nameClass: "is-size-6"
        },
        {
          value: "4",
          columnClass: "is-2-tablet is-6-mobile",
          nameClass: "is-size-6"
        },
        {
          value: "5",
          columnClass: "is-2-tablet is-6-mobile",
          nameClass: "is-size-6"
        }
      ]
    };
  },
  watch: {
    partners(value) {
      this.shuffled = this.shuffle(value);
    }
  },
  mounted: function() {
    // 掲載順の偏りをなくすため、hydration 後にシャッフルする
    this.shuffled = this.shuffle(this.partners);
  },
  methods: {
    shuffle(list) {
      const clone = [...list];
      for (let i = clone.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[rand]] = [clone[rand], clone[i]];
      }
      return clone;
    },
    partnersOf(tier) {
      return this.shuffled.filter(el => el.tier === tier);
    }
  }
};
</script>

<style lang="scss" scoped>
.column.h-full {
  display: flex;
}
.column.h-full > .nmp-dark {
  width: 100%;
  display: flex;
  flex-direction: column;
}
// 「CommentScreen」のような改行機会のない長い英字社名がカード幅を超えるため
.partner-name {
  overflow-wrap: anywhere;
}
</style>
