import { TouchableOpacity } from "react-native";
import { MapaAtendimentoHeader, MapaAtendimentoTitle } from "../../styles/styleCss";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HeaderGlobalProps } from "../../types/headerGlobalProps";
import { COLORS } from "../../types/colors";

export default function HeaderGlobal({
    title,
    onBackPress,
    showBackButton = true,
    backIconName = "arrow-back",
    backIconSize = 32,
    backIconColor = COLORS.COLOR_PIGZ
}: HeaderGlobalProps) {
    return (
        <MapaAtendimentoHeader>
            {showBackButton && (
                <TouchableOpacity onPress={onBackPress}>
                    <Icon name={backIconName} size={backIconSize} color={backIconColor} />
                </TouchableOpacity>
            )}
            <MapaAtendimentoTitle>{title}</MapaAtendimentoTitle>
        </MapaAtendimentoHeader>
    );
}