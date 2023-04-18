import CustomLink from '../src/components/CustomLink';

export default function Page404() {
    return (
        <div>
            <h1>Você caiu na página 404 :O</h1>
            <CustomLink href="/">
                Ir para a home
            </CustomLink>
        </div>
    )
}