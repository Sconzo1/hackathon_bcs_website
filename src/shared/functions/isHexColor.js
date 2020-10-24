export default function isHexColor(color) {
    return /^#[0-9A-F]{6}$/i.test(color);
}