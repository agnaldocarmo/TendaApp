import React from 'react';
import { Text } from '@rneui/base';
import {useRoute} from '@react-navigation/native'

function FormUsers() {
    const route= useRoute();
    const {id} = route.params;

    return (
        <Text>
            {id}
        </Text>
    );
}

export default FormUsers;