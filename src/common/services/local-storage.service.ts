class LocalStorageService {
    public set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get<T, D>(key: string, defaultValue?: D): T {
        const item: null | string = localStorage.getItem(key) ?? JSON.stringify(defaultValue);
        return JSON.parse(item);
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}

const localStorageService = new LocalStorageService();

export { localStorageService, LocalStorageService };
