import axios from 'axios';
import type { SetList } from './classes';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export default class SetListApi {
    static async getSetList(setListId: string) : Promise<SetList> {
        const response = await api.get(`/setlist/${setListId}`);
        return response.data;
    }

    static async createSetList(setList: SetList) : Promise<SetList> {
        setList.id = null;
        const response = await api.post('/setlist/new', setList);
        return response.data;
    }

    static async updateSetList(setList: SetList) : Promise<SetList> {
        const response = await api.post(`/setlist/${setList.id}`, setList);
        return response.data;
    }

    static async syncSetList(setList: SetList) : Promise<SetList> {
        const response = await api.post(`/setlist/${setList.id}/syncSpotify`, setList);
        return response.data;
    }
}