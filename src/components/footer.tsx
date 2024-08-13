import { Separator } from "@/components/ui/separator"

export const Footer = () => {
    return (
        <footer className="mt-5 ">
            <Separator/>
            <div className="my-5 text-center text-sm opacity-50">
                Create by @ <a href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/" target="blank_">Matheus Rodrigues da Silveira</a>
            </div>
        </footer>
    )
}