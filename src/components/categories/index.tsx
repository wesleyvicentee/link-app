import { FlatList } from "react-native";

import { useState } from "react";

import { styles } from "./styles";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

export function Categories(){
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const handleSelectCategory = (item: string) => {
        setSelectedCategory(item)
    }

    return (
        <FlatList 
            data={ categories }
            keyExtractor={ (item) => item.id }
            renderItem={ ({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={ item.id === selectedCategory }    
                    onPress={ () => handleSelectCategory(item.id) }
                />)
            }
            horizontal
            style={ styles.container }
            contentContainerStyle={ styles.content }
            showsHorizontalScrollIndicator={false}
        />
    )
}