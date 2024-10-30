import { Book } from './Book';
export const Library = () => {
	return (
		<>
			<Book name='리액트를 배웁시다' page='100'></Book>
			<Book name='React를 배웁시다' page='200'></Book>
			<Book name='Teact Native를 배웁시다' page='300'></Book>
		</>
	);
};
