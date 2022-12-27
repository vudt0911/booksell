<template>
  <div class="header">
    <!-- header desktop -->
    <div class="header_desktop">
      <div class="top-banner-block flex justify-center" style="background-color:#b3e7fd">
        <p>
          <a href="https://www.fahasa.com/sale-thu-3?fhs_campaign=topbanner">
            <img alt="" src="@/assets/images/FahasaT12_header_1263x60_1.jpg">
          </a>
        </p>
      </div>

      <!-- header container -->
      <div class="header-container flex justify-between mt-3"
           style="max-width: 1230px; margin-right: auto; margin-left: auto">
        <div class="header-logo " style="padding-top: 8px">
          <a href="https://www.fahasa.com/">
            <img alt="" src="@/assets/images/fahasa_logo.png">
          </a>
        </div>

        <div class="header-dropdown flex justify-end items-center" style="width: 99px;height: 100%;padding-top: 15px">
            <span class="icon_menu">
              <img alt="" src="@/assets/images/ico_menu.svg">
            </span>
          <span class="icon_seemore_gray">
              <img alt="" src="@/assets/images/icon_seemore_gray.svg">
            </span>
        </div>

        <div class="header-search flex justify-start" style="width: calc(100% - 619px);padding: 5px 8px 0 8px;">
          <div class="pt-2 relative mx-auto text-gray-600" style="width: 100%">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                   name="search" placeholder="Search" style="width: 100%;border: 1px solid #CDCFD0;" type="search">
            <button class="absolute bg-red-700 button-search flex justify-center items-center" type="submit">
              <svg id="Capa_1" class=" h-4 w-4 fill-current"
                   height="512px" style="enable-background:new 0 0 56.966 56.966;" viewBox="0 0 56.966 56.966"
                   width="512px" x="0px" xml:space="preserve"
                   xmlns="http://www.w3.org/2000/svg" y="0px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
            </button>
          </div>
        </div>

        <div class="header-information">
          <HeaderInfor>
            <template #header_infor>

            </template>
          </HeaderInfor>
        </div>
      </div>

    </div>

    <!-- header-breadcrumbs -->
    <div class="header-breadcrumbs flex">
      <div class="slider-main basis-2/3">
        <div id="default-carousel" class="relative" data-carousel="static">
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <span
                  class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
              <img alt="..."
                   class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                   src="@/assets/images/banner/FahasaT1222_Banner_840x320.jpg">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img alt="..."
                   class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                   src="@/assets/images/banner/fhs_potico_840x320.png">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img alt="..."
                   class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                   src="@/assets/images/banner/VPP_Main_banner_T10_840x320.jpg">
            </div>
          </div>
          <!-- Slider indicators -->
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-12 left-1/2">
            <button aria-current="false" aria-label="Slide 1" class="w-3 h-3 rounded-full bg-white" data-carousel-slide-to="0"
                    type="button"></button>
            <button aria-current="false" aria-label="Slide 2" class="w-3 h-3 rounded-full bg-white" data-carousel-slide-to="1"
                    type="button"></button>
            <button aria-current="false" aria-label="Slide 3" class="w-3 h-3 rounded-full bg-white" data-carousel-slide-to="2"
                    type="button"></button>
          </div>
          <!-- Slider controls -->
          <button
              class="absolute top-0 left-[-20px] z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
              data-carousel-prev
              type="button">
        <span
            class="bg-white inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-600 sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
          </button>
          <button
              class="absolute top-0 right-[-20px] z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
              data-carousel-next
              type="button">
        <span
            class="bg-white inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-600 sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            <span class="sr-only">Next</span>
        </span>
          </button>
        </div>

      </div>

      <div class="slider-sub basis-1/3">
        asdas
      </div>
    </div>
  </div>
</template>

<script>
import HeaderInfor from "@/components/HeaderInfor.vue";

export default {
  name: 'HeaderComponent',
  data() {
    return {}
  },
  components: {
    HeaderInfor
  }

}
</script>

<style>
.header-logo {
  width: 220px;
  height: 36px;
}

.icon_menu {
  width: 36px;
  height: 36px;
  color: red;
}

.icon_seemore_gray {
  width: 16px;
  height: 16px;
}

.button-search {
  top: calc(50% + 2px);
  right: 4px;
  transform: translate(0, -50%);
  font-size: 21px;
  width: 72px;
  height: 30px;
  color: #fff;
  border: 2px solid #C92127;
  border-radius: 8px;
}

.header-breadcrumbs {
  width: 1230px;
  padding-left: 5px;
  padding-right: 5px;
  /*height: 100px;*/
  margin: auto;
  background-color: #F0F0F0;
}
</style>
