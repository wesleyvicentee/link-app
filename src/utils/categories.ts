import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string,
    name: string,
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    { id: '1', name: 'Curso', icon: 'code' },
    { id: '1', name: 'Projeto', icon: 'folder' },
    { id: '1', name: 'Site', icon: 'language' },
    { id: '1', name: 'Artigo', icon: 'newspaper' },
    { id: '1', name: 'Vídeo', icon: 'movie' },
    { id: '1', name: 'Documentação', icon: 'content-paste' },
]