import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
	token: string | null;
	redirect: string;
	outlet: JSX.Element;
};

export default function ProtectedRoute({
	token,
	redirect,
	outlet,
}: ProtectedRouteProps) {
	if (token) {
		return outlet;
	} else {
		return <Navigate to={`${redirect}`} />;
	}
}
