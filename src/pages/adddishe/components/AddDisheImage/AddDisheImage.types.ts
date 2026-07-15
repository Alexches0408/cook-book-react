export interface AddDisheImageProps {
    image: File | null,
    onchange: (file: File | null) => void
}