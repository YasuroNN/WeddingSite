import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'
import vkIcon from '@/assets/icons/VkIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            inst: { // name of our custom icon
                component: InstagramIcon, // our custom component
            },
            vk: { // name of our custom icon
                component: vkIcon, // our custom component
            },
        },
    },
});
