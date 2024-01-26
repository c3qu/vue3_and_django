import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return {count, doubleCount, increment}
})

export const currentPageStore = defineStore('currentPage', () => {
    const currentPage = ref(1)
    const pageCount = ref(1)

    const getCurrentPage = computed(() => currentPage.value)
    const getPageCount = computed(() => pageCount.value)

    const getLeftShowPage = computed(() => currentPage.value - 6 < 1 ? 1 : currentPage.value - 6)
    const getRightShowPage = computed(
        () => getLeftShowPage.value + 12 > pageCount.value ? pageCount.value : getLeftShowPage.value + 12
    )

    function init(count) {
        currentPage.value = 1
        pageCount.value = count
    }

    function setCurrentPage(page) {
        if (page >=1 && page <= pageCount.value) {
            currentPage.value = page
        }
    }

    function next() {
        currentPage.value++
        if (currentPage.value > pageCount.value) {
            currentPage.value = pageCount.value
        }
    }

    function pre() {
        currentPage.value--
        if (currentPage.value === 0) {
            currentPage.value = 1
        }
    }

    return {
        currentPage,
        pageCount,
        next,
        pre,
        init,
        setCurrentPage,
        getCurrentPage,
        getPageCount,
        getLeftShowPage,
        getRightShowPage
    }
})
