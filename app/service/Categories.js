const { getCategoriesById, createCategories, deleteCategories, getAllCategoriess, updateCategories } = require("../model/Categories")

class CategoriesService {
    async create(data) {
        const CategoriesData = await createCategories(data)
        return { id: CategoriesData.id }
    }

    async get(id) {
        const CategoriesData = await getCategoriesById(id)
        return CategoriesData
    }

    async getAll() {
        const CategoriesData = await getAllCategoriess()
        return CategoriesData
    }

    async delete(id) {
        await deleteCategories(id)
        return { ok: true, message: "Фильтр успешно удален" }
    }

    async update(id, data) {
        await updateCategories(id, data)
        return { ok: true, message: "Фильтр успешно обновлен" }
    }
}

module.exports = new CategoriesService()