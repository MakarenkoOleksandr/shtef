# Generated by Django 5.0.6 on 2024-06-25 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='navigation',
            old_name='url',
            new_name='ua',
        ),
        migrations.RemoveField(
            model_name='navigation',
            name='title',
        ),
        migrations.AddField(
            model_name='navigation',
            name='pl',
            field=models.CharField(default='default_value_here', max_length=200),
        ),
        migrations.AlterField(
            model_name='navigation',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]