const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  'parent-requests': 'parent_request',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
