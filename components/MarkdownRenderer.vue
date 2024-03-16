<template>
  <div class="p-2 border bg-white dark:bg-black dark:border-gray-700 rounded">
    <div class="text-black" v-html="markdown"></div>
  </div>
</template>

<script>
import markdownit from 'markdown-it'

export default {
  computed: {
    markdown() {
      const md = markdownit({
        html: true,
        typographer: true,
        linkify: true,
      })
      return md.render(`
# Hoş Geldiniz!

Bu benim ilk blog yazım. Burada sizlerle deneyimlerimi ve düşüncelerimi paylaşacağım.

## İlk Konu: Markdown Nedir?

Markdown, metin biçimlendirme için kullanılan bir hafif işaretleme dili. Markdown, basit ve anlaşılır bir sözdizimine sahiptir ve HTML'e dönüştürülebilir.

Markdown, başlıklar, listeler, bağlantılar ve daha fazlası gibi temel metin biçimlendirme öğelerini destekler.

## İkinci Konu: Blog Nasıl Oluşturulur?

Markdown kullanarak bir blog oluşturmak oldukça kolaydır. Bir metin editörü kullanarak Markdown dosyalarını oluşturabilir ve ardından bu dosyaları web sitesine dönüştürmek için statik site oluşturma araçları kullanabilirsiniz.

## Sonuç

Markdown, basit ve etkili bir şekilde metin biçimlendirme yapmanızı sağlar. Bu blogda Markdown'ın nasıl kullanılabileceğini gösterdim. Daha fazla içerik için takipte kalın!

---

Yukarıdaki Markdown dosyasını kendi blog sitenizde kullanarak, başlıklar, metin paragrafları ve liste öğeleri gibi temel öğelerle birlikte basit bir blog oluşturabilirsiniz. Ayrıca, bağlantılar ve görseller gibi diğer öğeleri eklemek de mümkündür.
      `)
    },
  },
}
</script>

<style lang="scss">
h1,
h2,
h3 {
  font-weight: bold;
}

hr {
  margin: 10px 0;
}

p {
  margin-bottom: 10px;
}
</style>
