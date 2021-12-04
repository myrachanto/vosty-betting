export default {
    methods: {
      capitaword (str) {
        const words = str.split(' ')
        const sent = words.map((word) => {
          return word[0].toUpperCase() + word.substring(1)
        }).join(' ')
        return sent
      }
    }
  }
  