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
      },
    },
  },
})
