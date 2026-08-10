import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        savethedate: resolve(__dirname, 'savethedate.html'),
        registration: resolve(__dirname, 'registration.html'),
        aboutus: resolve(__dirname, 'about-us.html'),
        contactus: resolve(__dirname, 'contact-us.html'),
        lodging: resolve(__dirname, 'lodging.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        theme: resolve(__dirname, 'theme.html'),
        faqs: resolve(__dirname, 'faqs.html'),
        adultprogram: resolve(__dirname, 'adult-program.html'),
        junioryouthandchildrensprogram: resolve(__dirname, 'junior-youth-and-childrens-program.html'),
        mealandfoodoptions: resolve(__dirname, 'meal-and-food-options.html'),
        recreationandactivities: resolve(__dirname, 'recreation-and-activities.html'),
        vendors: resolve(__dirname, 'vendors.html'),
        youthprogram: resolve(__dirname, 'youth-program.html'),
      },
    },
  },
})
