<script setup>

</script>
<template>
  <div id="accordion-collapse" data-accordion="collapse" class="mt-12">
    <h2 id="accordion-collapse-heading-2">
      <button
        type="button"
        class="flex items-center justify-between w-full gap-3 p-5 font-medium transition-all bg-transparent border text-textWhite border-b-1 border-gold rtl:text-right hover:bg-testingColor rounded-t-xl"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-2"
      >
        <span class="tracking-wide text-lightGold"
          >Belanja Mudah di TikTok & Shopee</span
        >
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0 text-lightGold"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-2"
      class="hidden"
      aria-labelledby="accordion-collapse-heading-2"
    >
      <div class="p-5 border border-b-1 border-gold dark:border-gray-700">
        <p class="mb-2 font-light tracking-wide text-textWhite dark:text-gray-400">
          Kami menyediakan kemudahan belanja melalui platform yang sudah Anda
          kenal dan gunakan sehari-hari. Cukup klik dan checkout!
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full gap-3 p-5 font-medium transition-all bg-transparent border text-textWhite border-b-1 border-gold rtl:text-right hover:bg-testingColor"
        data-accordion-target="#accordion-collapse-body-3"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-3"
      >
        <span class="tracking-wide text-lightGold"> Produk Berkualitas</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0 text-lightGold"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-3"
      class="hidden"
      aria-labelledby="accordion-collapse-heading-3"
    >
      <div class="p-5 border border-b-1 border-gold dark:border-gray-700">
        <p class="mb-2 font-light tracking-wide text-textWhite dark:text-gray-400">
          Semua produk kami telah teruji dan diakui oleh konsumen, menawarkan
          hasil nyata baik untuk perawatan kulit maupun kendaraan.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-4">
      <button
        type="button"
        class="flex items-center justify-between w-full gap-3 p-5 font-medium transition-all bg-transparent border text-textWhite border-b-1 border-gold rtl:text-right hover:bg-testingColor"
        data-accordion-target="#accordion-collapse-body-4"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-4"
      >
        <span class="tracking-wide text-lightGold">
          Pengiriman Cepat & Aman
        </span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0 text-lightGold"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-4"
      class="hidden"
      aria-labelledby="accordion-collapse-heading-4"
    >
      <div class="p-5 border border-b-1 border-gold dark:border-gray-700">
        <p class="mb-2 font-light tracking-wide text-textWhite dark:text-gray-400">
          Kerja sama dengan penyedia layanan logistik terbaik memastikan produk
          Anda sampai tepat waktu dan dalam kondisi sempurna.
        </p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-5">
      <button
        type="button"
        class="flex items-center justify-between w-full gap-3 p-5 font-medium transition-all bg-transparent border text-textWhite border-b-1 border-gold rtl:text-right hover:bg-testingColor"
        data-accordion-target="#accordion-collapse-body-5"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-5"
      >
        <span class="tracking-wide text-lightGold"> Promo Eksklusif </span>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0 text-lightGold"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-5"
      class="hidden"
      aria-labelledby="accordion-collapse-heading-5"
    >
      <div class="p-5 border border-b-1 border-gold dark:border-gray-700">
        <p class="mb-2 font-light tracking-wide text-textWhite dark:text-gray-400">
          Dapatkan penawaran spesial dan diskon menarik dengan mengikuti kami di
          TikTok dan Shopee.
        </p>
      </div>
    </div>
  </div>
</template>
