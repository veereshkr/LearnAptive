def associate_by_active_email(strategy, details, user=None, *args, **kwargs):
    """
    Associate current auth with a user with the same email address in the DB.

    This pipeline entry is not 100% secure unless you know that the providers
    enabled enforce email verification on their side, otherwise a user can
    attempt to take over another user account by using the same (not validated)
    email address on some provider.  This pipeline entry is disabled by
    default.
    """
    if user:
        return None

    email = details.get('email')
    active_user = []
    inactive_user = []
    if email:
        # Try to associate accounts registered with the same email address,
        # only if it's a single object. AuthException is raised if multiple
        # objects are returned.
        users = list(strategy.storage.user.get_users_by_email(email))
        for i in range(len(users)):
            if users[i].is_active:
                active_user.append(users[i])
            else:
                inactive_user.append(users[i])
        if len(active_user) == 0:
            for i in range(len(inactive_user)):
                    inactive_user[i].delete()
            return None
        elif len(active_user) > 1:
            raise AuthException(
                strategy.backend,
                'The given email address is associated with another account'
            )
        else:
            return {'user': active_user[0]}